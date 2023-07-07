import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public email: number;

  @column({ serializeAs: null })
  public password: string;

  @column({ serializeAs: null })
  public toto: string;

  @column()
  public content: string;
}
