import { createReadStream } from 'fs';
import { mkdir } from 'fs/promises';
import { createUnzip } from 'zlib';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function extractZip() {
  const zipPath = '/vercel/share/v0-project/GERADOR_CURVAS_NIVEL.zip';
  const extractPath = '/vercel/share/v0-project';
  
  try {
    // Use unzip command to extract
    const { stdout, stderr } = await execAsync(`unzip -o "${zipPath}" -d "${extractPath}"`);
    console.log('[v0] Extraction output:', stdout);
    if (stderr) console.log('[v0] Stderr:', stderr);
    console.log('[v0] ZIP extracted successfully!');
  } catch (error) {
    console.error('[v0] Error extracting ZIP:', error.message);
  }
}

extractZip();
