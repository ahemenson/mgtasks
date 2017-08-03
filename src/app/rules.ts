import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';
import { CustomListingTableComponent } from "app/widgets/customListingTable";
import { CustomEntityLineComponent } from "app/widgets/customEntityLine";

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .etr('list_entities', 'bug',  CustomListingTableComponent, { centerth: 'w3-center'})  
        .etr('list_entities', 'issue',  CustomListingTableComponent, { centerth: 'w3-center'}) 
        .etr('list_entities', 'product',  CustomListingTableComponent, { centerth: 'w3-center'}) 
        .etr('list_entities', 'project',  CustomListingTableComponent, { centerth: 'w3-center'}) 
        .detr('list_entities', CustomListingTableComponent) 
        .er('table_line', 'bug', CustomEntityLineComponent, { centertd: 'w3-center'})
        .er('table_line', 'issue', CustomEntityLineComponent, { centertd: 'w3-center'})
        .er('table_line', 'product', CustomEntityLineComponent, { centertd: 'w3-center'})
        .er('table_line', 'project', CustomEntityLineComponent, { centertd: 'w3-center'})
        .der('table_line', CustomEntityLineComponent)
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
