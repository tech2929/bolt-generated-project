```typescript
import { WebContainer } from '@webcontainer/api';

let webcontainerInstance: WebContainer;

export async function getWebContainer() {
  if (!webcontainerInstance) {
    webcontainerInstance = await WebContainer.boot();
  }
  return webcontainerInstance;
}

export async function listFiles(path: string = '/'): Promise<string[]> {
  const container = await getWebContainer();
  const files = await container.fs.readdir(path, { withFileTypes: true });
  return files;
}

export async function readFile(path: string): Promise<string> {
  const container = await getWebContainer();
  const file = await container.fs.readFile(path);
  return new TextDecoder().decode(file);
}
