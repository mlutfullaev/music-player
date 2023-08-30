import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {Track} from "./schemas/track.schema";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {ObjectId} from "mongoose";
import {CreateCommentDto} from "./dto/create-comment.dto";

@Controller('track')
export class TrackController {
  constructor(private trackService: TrackService) {
  }

  @Post()
  async create(@Body() dto: CreateTrackDto): Promise<Track> {
    return await this.trackService.create(dto)
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
}
