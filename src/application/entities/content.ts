export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private privateValidateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLenghtValidate = this.privateValidateContentLength(content);

    if (!isContentLenghtValidate) {
      throw new Error('Content length error.');
    }
    this.content = content;
  }
}
