import { Link } from './Link';
import { User } from './user';

/** Content class for reports page */
export class Content {
   /** Number variable for id */
   id: number = 0;
   /** String variable for title */
   title: string = '[no title]';
   /** String variable for format */
   format: string = '[no format]';
   /** String variable for description */
   description: string = '-';
   /** String variable for url */
   url: string = '[no url]';
   /** Array of links variable */
   links: Link[] = [];
   /** User variable for user id */
   userid: User;
   /** String array for status */
   status: string;

   /**
    * Constructor for creating content
    * @param id 
    * @param title 
    * @param format 
    * @param description 
    * @param url 
    * @param links 
    * @param userid
    * @param status
    */
   constructor(id: number, title: string, format: string, description: string, url: string, links: Link[], userid: User, status: string) {
      if (null != id) this.id = id;
      if (null != title) this.title = title;
      if (null != format) this.format = format;
      if (null != description) this.description = description;
      if (null != url) this.url = url;
      if (null != links) this.links = links;
      if (null != userid) this.userid = userid;
      if (null == userid) this.userid = new User;
      if (null != status) this.status = status;
      if (null == status) this.status = "PENDING";
   }

   /** Getter method for id */
   public getId(): number {
      return this.id;
   }
   /** Getter method for title */
   public getTitle(): string {
      return this.title;
   }
   /** Getter method for format */
   public getFormat(): string {
      return this.format;
   }
   /** Getter method for description */
   public getDescription(): string {
      return this.description;
   }
   /** Getter method for url */
   public getUrl(): string {
      return this.url;
   }
   /** Getter method for Links */
   public getLinks(): Link[] {
      return this.links;
   }
   /** Getter method for User id*/
   public getUser(): User {
      return this.userid;
   }
   /** Getter method for status*/
   public getStatus(): string {
      return this.status;
   }
   /** Setter method for id */
   public setId(id: number) {
      this.id = id;
   }
   /** Setter method for title */
   public setTitle(title: string) {
      this.title = title;
   }
   /** Setter method for format */
   public setFormat(format: string) {
      this.format = format;
   }
   /** Setter method for description */
   public setDescription(description: string) {
      this.description = description;
   }
   /** Setter method for url */
   public setUrl(url: string) {
      this.url = url;
   }
   /** Setter method for Links */
   public setLinks(links: Link[]) {
      this.links = links;
   }
   /** Setter method for User id*/
   public setUserid(userid: User) {
      this.userid = userid;
   }
   /** Setter method for status*/
   public setStatus(status: string) {
      this.status = status;
   }

}