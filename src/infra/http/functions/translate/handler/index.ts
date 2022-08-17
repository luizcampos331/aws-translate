import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import TranslateService from 'src/application';
import { container } from 'tsyringe';
import schema from '../schema/schema';
import '../../../../providers/translate'

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { text } = event.body

  const translateService = container.resolve(TranslateService);

  const textTranslate = await translateService.execute(text);

  return formatJSONResponse({
    message: textTranslate
  });
};

export const main = middyfy(handler);
