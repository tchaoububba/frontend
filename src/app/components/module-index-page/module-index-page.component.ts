import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/models/Module';
import { ModuleStoreService } from 'src/app/services/module-store.service';
import { ContentFetcherService } from 'src/app/services/content-fetcher.service';
import { Content } from 'src/app/models/Content';
import { Filter } from 'src/app/models/Filter';
import { ToastrService } from 'ngx-toastr';

/** Typescript Component for Module Index Page */
@Component({
   selector: 'app-module-index-page',
   templateUrl: './module-index-page.component.html',
   styleUrls: ['./module-index-page.component.css']
})
export class ModuleIndexPageComponent implements OnInit {

   /** Map of Visibility status of each Module */
   contentVisible: Map<Module, boolean> = new Map<Module, boolean>();

   /** Map of Modules to their list of related Content.
    * Loaded when user clicks on Module (lazy load) */
   moduleContents: Map<Module, Content[]> = new Map<Module, Content[]>();

   /**
    * Variable that will reference selected content for removal. Pre-initialized as it would cause errors upon loading the component.
    */
   selCon: Content = new Content(0, "", "", "", "", []);

   /**
    * Variable that will reference the module of the selected content for removal. Pre-initialized as it would cause errors upon loading the component.
    */
   selModule: Module = new Module(0, "", 0, []);

   /**
    * Used to display a spinner when modules are loading.
    */
   isLoading: boolean = false;

   /**
    * Constructor for Module Index Component
    * @param cs Fetches content
    * @param ms Fetches tags
    */
   constructor(
      private cs: ContentFetcherService,
      public ms: ModuleStoreService,
      private toastr: ToastrService
   ) { }

   /** On page initialization load the modules to list on the dropdown menu
    */
   ngOnInit() {
      this.ms.loadModules();
   }

   /**
    * Lists the available content for module input
    * @param {Module} module 
    */
   listContent(module: Module) {
      if (null == this.moduleContents.get(module)) {

         this.contentVisible.set(module, false);

         let filter: Filter = new Filter(
            null, null, [module.id]
         );
         this.cs.filterContent(filter).subscribe(
            (response) => {
               if (response != null) {
                  this.parseContentResponse(response, module);
               } else {
                  this.toastr.error('Response was null');
               }
            },
            (response) => {
               this.toastr.error('Failed to request contents');
               
            },
            () => { this.contentVisible.set(module, true); }
         )
      }

      else {
         this.contentVisible.set(module, !this.contentVisible.get(module));
      }
   }

   /**
    * Sort the content list order by title
    * Insert into Module->List<Content> Map
    * @param response Available content
    * @param module Tags/modules for content
    */
   parseContentResponse(response: Content[], module: Module) {

      let sortedResponse = response.sort(
         (a, b) => { return a.title < b.title ? -1 : 1 }
      )

      this.moduleContents.set(module, sortedResponse);
   }

   /**
    * Description - removes the content from the specified module. It will also send a request to decouple the link between content and module.
    * @param content - the content being removed
    * @param module - the module the content is being removed from
    */
   removeContentFromModuleIndex() {
      let found = this.selCon.links.findIndex(l => this.selModule.id === l.moduleId);
      this.selCon.links.splice(found, 1);

      let foundContent = this.moduleContents.get(this.selModule).findIndex(l => this.selCon.id === l.id);
      this.moduleContents.get(this.selModule).splice(foundContent, 1);

      this.cs.updateContentByContent(this.selCon).subscribe();
   }
   /**
    * Description - assigns the content and the module that the content resides into variables for this component to utilize.
    * @param content - the selected content
    * @param module - the module the selected content resides in
    */
   selectedLinkForRemoval(content: Content, module: Module) {
      this.selCon = content;
      this.selModule = module;
   }
}
