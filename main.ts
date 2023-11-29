function checkForError(value: number): void {
    if (value === -1) {
        throw new Error("値が-1なのでエラーです");
    }
}try {
    checkForError(-1);
    console.log("エラーは発生しない");
} catch (error) {
    console.error("eroor message");
}
