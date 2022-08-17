export default interface ITranslateProvider {
  process(text: string): Promise<string>;
}