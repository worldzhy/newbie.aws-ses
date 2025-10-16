import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {AwsSesSuppressionListService} from './suppression-list.service';
import {
  AddSuppressedDestinationRequestDto,
  ListSuppressionDestinationsRequestDto,
} from './suppression-list.dto';

@ApiTags('AWS SES Suppression List')
@Controller('aws-ses/suppression-list')
export class AwsSesSuppressionListController {
  constructor(
    private readonly suppressionListService: AwsSesSuppressionListService
  ) {}

  @Post('')
  async addSuppressedDestination(
    @Body() body: AddSuppressedDestinationRequestDto
  ) {
    return await this.suppressionListService.addSuppressedDestination(body);
  }

  @Get('')
  async listSuppressedDestinations(
    @Query() query: ListSuppressionDestinationsRequestDto
  ) {
    return await this.suppressionListService.listSuppressedDestinations(query);
  }

  @Get(':emailAddress')
  async getSuppressedDestination(@Param('emailAddress') emailAddress: string) {
    return await this.suppressionListService.getSuppressedDestination(
      emailAddress
    );
  }

  @Delete(':emailAddress')
  async deleteSuppressedDestination(
    @Param('emailAddress') emailAddress: string
  ) {
    return await this.suppressionListService.deleteSuppressedDestination(
      emailAddress
    );
  }

  /* End */
}
