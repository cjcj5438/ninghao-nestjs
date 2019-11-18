import { Category } from "../category/category.entity";
import { Tag } from "../tag/tag.entity";

export class PostDto {
  readonly title: string;
  readonly body: string;
  readonly category: Category;// 这里为啥可以这样写
  tags: Tag[];
}
