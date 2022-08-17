import { Translate } from "aws-sdk";
import ITranslateProvider from "../models/translate.provider";

export default class AwsTranslate implements ITranslateProvider {
  private client: Translate;

  constructor() {
    this.client = new Translate({ region: 'us-east-1' })
  }

  async process(text: string): Promise<string> {
    const params = {
      SourceLanguageCode: 'en',
      TargetLanguageCode: 'pt',
      Text: text
    }

    const {TranslatedText} = await this.client
      .translateText(params)
      .promise()

    return TranslatedText
  }
}