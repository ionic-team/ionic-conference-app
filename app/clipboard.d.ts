interface Clipboard {
    copy(message: string): void;
}

interface CordovaPlugins {
    clipboard: Clipboard;
}