import {Global, Module} from '@nestjs/common';
import {AwsSesService} from './aws-ses.service';

@Global()
@Module({
  providers: [AwsSesService],
  exports: [AwsSesService],
})
export class AwsSesModule {}
