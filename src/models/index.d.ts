import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type StatsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VideoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Stats {
  readonly id: string;
  readonly numPlay?: number | null;
  readonly timePlay?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Stats, StatsMetaData>);
  static copyOf(source: Stats, mutator: (draft: MutableModel<Stats, StatsMetaData>) => MutableModel<Stats, StatsMetaData> | void): Stats;
}

export declare class Video {
  readonly id: string;
  readonly link: string;
  readonly thumbnail?: string | null;
  readonly title?: string | null;
  readonly Stats?: Stats | null;
  readonly tag?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly videoStatsId?: string | null;
  constructor(init: ModelInit<Video, VideoMetaData>);
  static copyOf(source: Video, mutator: (draft: MutableModel<Video, VideoMetaData>) => MutableModel<Video, VideoMetaData> | void): Video;
}