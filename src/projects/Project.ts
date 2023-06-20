export class Project
{
    id: number | undefined;
    name: string = '';
    description: string = '';
    imageUrl: string = '';
    contractTypeId: number | undefined;
    contractSignedOn: Date = new Date();
    budget = 0;
    isActive: boolean = false;
    get isNew(): boolean
    {
        return this.id === undefined;
    }

    constructor(initializer?:any)
    {
        if (!initializer)
        {
            return;
        }
        if(initializer.id) this.id = initializer.id;
        if(initializer.name) this.id = initializer.name;
        if(initializer.description) this.id = initializer.description;
        if(initializer.imageUrl) this.id = initializer.imageUrl;
        if(initializer.contractTypeId) this.id = initializer.contractTypeId;
        if(initializer.contractSignedOn) this.id = initializer.contractSignedOn;
        if(initializer.budget) this.id = initializer.budget;
        if(initializer.isActive) this.id = initializer.isActive;
    }
}
