/** Filter class for filtering on reports page */
export class Filter {
    /** String variable for title */
    title: string = "";
    /** String variable for format */
    format: string = "";
    /** Number array variable for modules */
    modules: number[] = [];
    /** String array variable for viewable statuses */
    statuses: string[] = [];

    /**
     * Constructor that takes title, format, and modules for filtering
     * @param title 
     * @param format 
     * @param modules 
     * @param statuses
     */
    constructor(title: string, format: string, modules: number[], statuses: string []){
        if (null != title) this.title = title;
        if (null != format) this.format = format;
        if (null != modules) this.modules = modules;
        if (null != statuses) this.statuses = statuses;
    }

    /** Getter method to get title */
    public getTitle(): string {
        return this.title;
    }
    /** Getter method to get format */
    public getFormat(): string {
        return this.format;
    }
    /** Getter method to get array of Modules */
    public getModules(): number[] {
        return this.modules;
    }
    /** Getter method to get array of statuses */
    public getStatus(): string[] {
        return this.statuses;
    }
    /** Setter method to set title */
    public setTitle(title: string){
        this.title = title;
    }
    /** Setter method to set format */
    public setFormat(format: string){
        this.format = format;
    }
    /** Setter method to set modules */
    public setModules(modules: number[]){
        this.modules = modules;
    }
     /** Setter method to set statuses */
     public setStatus(statuses: string[]){
        this.statuses = statuses;
    }

}