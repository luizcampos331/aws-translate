import 'reflect-metadata'
import ITranslateProvider from "src/infra/providers/translate/models/translate.provider";
import { inject, injectable } from "tsyringe";

@injectable()
export default class TranslateService {
  constructor(
    @inject('TranslateProvider')
    private translateProvider: ITranslateProvider,
  ) {}

  async execute(text: string): Promise<string> {
    const textTranslate = await this.translateProvider.process(text);

    return textTranslate;
  }
}