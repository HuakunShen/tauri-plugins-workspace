interface ProgressPayload {
    progress: number;
    progressTotal: number;
    total: number;
    transferSpeed: number;
}
type ProgressHandler = (progress: ProgressPayload) => void;
declare function upload(url: string, filePath: string, progressHandler?: ProgressHandler, headers?: Map<string, string>, options?: {
    skipSslCertCheck?: boolean;
    trustSslCert?: string;
}): Promise<string>;
declare function download(url: string, filePath: string, progressHandler?: ProgressHandler, headers?: Map<string, string>, body?: string, options?: {
    skipSslCertCheck?: boolean;
    trustSslCert?: string;
}): Promise<void>;
export { download, upload };
