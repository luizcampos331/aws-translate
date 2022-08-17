import { container } from "tsyringe";
import AwsTranslate from "./implementations/aws-translate.provider";
import ITranslateProvider from "./models/translate.provider";

container.registerSingleton<ITranslateProvider>('TranslateProvider', AwsTranslate)