import JSZip from 'jszip';

interface FileSystemEntry {
  name: string;
  kind: 'file' | 'directory';
}

export async function downloadCurrentProject() {
  try {
    const zip = new JSZip();
    
    // Recursive function to process directories
    async function processDirectory(currentPath: string = '') {
      const response = await fetch(`/__webcontainer/fs${currentPath}`, {
        headers: {
          'Accept': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`Failed to read directory: ${currentPath}`);
      }
      
      const entries: FileSystemEntry[] = await response.json();
      
      for (const entry of entries) {
        const entryPath = `${currentPath}/${entry.name}`.replace(/^\/+/, '');
        
        if (entry.kind === 'file') {
          // Skip node_modules and .git directories
          if (entryPath.includes('node_modules/') || entryPath.includes('.git/')) {
            continue;
          }
          
          const fileResponse = await fetch(`/__webcontainer/fs/${entryPath}`);
          if (fileResponse.ok) {
            const content = await fileResponse.text();
            zip.file(entryPath, content);
          }
        } else if (entry.kind === 'directory') {
          // Skip node_modules and .git directories
          if (entry.name !== 'node_modules' && entry.name !== '.git') {
            await processDirectory(`/${entryPath}`);
          }
        }
      }
    }

    await processDirectory();
    
    const content = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 9 }
    });

    const fileName = `project-${new Date().toISOString().slice(0, 10)}.zip`;
    const downloadUrl = URL.createObjectURL(content);
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);

    return true;
  } catch (error) {
    console.error('Error downloading project:', error);
    throw error;
  }
}
