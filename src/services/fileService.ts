import JSZip from 'jszip';

// Function to recursively list all files in a directory
async function listFiles(path = '/'): Promise<string[]> {
  const files: string[] = [];
  
  try {
    const response = await fetch(`/__webcontainer/fs${path}`);
    if (!response.ok) throw new Error(`Failed to read directory: ${path}`);
    
    const entries = await response.json();
    
    for (const entry of entries) {
      const fullPath = `${path}${entry.name}`;
      
      // Skip node_modules, .git, and other system files
      if (entry.name === 'node_modules' || 
          entry.name === '.git' || 
          entry.name.startsWith('.') ||
          entry.name === 'dist') {
        continue;
      }
      
      if (entry.type === 'directory') {
        const subFiles = await listFiles(`${fullPath}/`);
        files.push(...subFiles);
      } else {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error('Error listing files:', error);
    throw error;
  }
  
  return files;
}

// Function to read file content
async function readFile(path: string): Promise<string> {
  try {
    const response = await fetch(`/__webcontainer/fs${path}`);
    if (!response.ok) throw new Error(`Failed to read file: ${path}`);
    return await response.text();
  } catch (error) {
    console.error(`Error reading file ${path}:`, error);
    throw error;
  }
}

export async function downloadCurrentProject() {
  try {
    const zip = new JSZip();
    
    // Get all file paths
    const files = await listFiles();
    
    // Read and add each file to the zip
    for (const filePath of files) {
      try {
        const content = await readFile(filePath);
        // Remove leading slash for zip entry
        const zipPath = filePath.startsWith('/') ? filePath.slice(1) : filePath;
        zip.file(zipPath, content);
      } catch (error) {
        console.warn(`Skipping file ${filePath}:`, error);
      }
    }
    
    // Generate zip file
    const content = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 9 }
    });
    
    // Trigger download
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
    throw new Error(
      error instanceof Error 
        ? `Download failed: ${error.message}` 
        : 'Failed to download project. Please try again.'
    );
  }
}
