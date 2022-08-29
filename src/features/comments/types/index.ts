import { BaseEntity } from '@/types';

export type Comment = {
  body: string;
  authorId: string;
  authorName: string;
  discussionId: string;
} & BaseEntity;
