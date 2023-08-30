import {Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {Track} from "./schemas/track.schema";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {ObjectId} from "mongoose";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";

@Controller('track')
export class TrackController {
  constructor(private trackService: TrackService) {
  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    {name: "picture", maxCount: 1},
    {name: "audio", maxCount: 1},
  ]))
  async create(@UploadedFiles() files, @Body() dto: CreateTrackDto): Promise<Track> {
    const {picture, audio} = files;
    return await this.trackService.create(dto, picture[0], audio[0])
  }

  @Get()
  async findAll(): Promise<Track[]> {
    return await this.trackService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId): Promise<Track> {
    return await this.trackService.findOne(id)
  }

  @Delete(':id')
  async delete (@Param('id') id: ObjectId)   {
    return await this.trackService.delete(id)
  }

  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.trackService.addComment(dto)
  }

  @Get('/listen/:id')
  listen(@Param('id') id: ObjectId) {
    return this.trackService.listen(id)
  }
}
