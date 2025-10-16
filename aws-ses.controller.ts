import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {AwsSesService} from './aws-ses.service';
import {EmailTemplate} from './aws-ses.interface';
import {
  SendEmailRequestDto,
  SendEmailWithTemplateRequestDto,
} from './aws-ses.dto';

@ApiTags('AWS SES')
@Controller('aws-ses/emails')
export class AwsSesController {
  constructor(private readonly ses: AwsSesService) {}

  @Post('')
  async sendEmail(@Body() body: SendEmailRequestDto) {
    return await this.ses.sendEmail(body);
  }

  @Post('template')
  async sendEmailWithTemplate(@Body() body: SendEmailWithTemplateRequestDto) {
    return await this.ses.sendEmailWithTemplate({
      toAddress: body.toAddress,
      template: {[body.templateName]: body.templateParams},
    });
  }

  @Get('templates')
  async listEmailTemplates() {
    return Object.values(EmailTemplate);
  }

  @Get('send-statistics')
  async getSendStatistics() {
    return await this.ses.getSendStatistics();
  }

  /* End */
}
