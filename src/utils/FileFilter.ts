import * as vscode from 'vscode';
import * as path from 'path';

/**
 * Check if a directory should be excluded based on configuration
 * @param dirName - Name of the directory
 * @param excludeFolders - Array of folder names to exclude
 * @returns true if directory should be excluded, false otherwise
 */
export function shouldExcludeDirectory(
    dirName: string, 
    excludeFolders: string[]
): boolean {
    return excludeFolders.includes(dirName);
}

/**
 * Check if a file should be processed (not excluded)
 * @param fileName - Name of the file
 * @param fileType - Type of the file (file or directory)
 * @param excludeFolders - Array of folder names to exclude
 * @returns true if file should be processed, false if should be excluded
 */
export function shouldProcessFile(
    fileName: string,
    fileType: vscode.FileType,
    excludeFolders: string[]
): boolean {
    // If it's a directory, check if it should be excluded
    if (fileType === vscode.FileType.Directory) {
        return !shouldExcludeDirectory(fileName, excludeFolders);
    }
    
    // For files, always process (we only exclude directories)
    return true;
}
