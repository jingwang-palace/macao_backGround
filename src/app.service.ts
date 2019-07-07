import { Injectable, ParamData, Query } from '@nestjs/common';

@Injectable()
export class AppService {
  logInfo(query): string {
    console.log(`param:${JSON.stringify(query)}`);
    console.log(`NumID:${query["NumID"]}`);
    console.log(`Money:${query["Money"]}`);
    console.log(`PayUser:${query["PayUser"]}`);
    console.log(`payTime:${query["payTime"]}`);
    console.log(`Source:${query["Source"]}`);
    console.log(`Keys:${query["Keys"]}`);
    return 'Success';
  }
}
