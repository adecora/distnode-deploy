module.exports = class Recipe {
    constructor (id) {
        this.id = Number(id);
        this.name = null;
    }
    async hydratate {  // Pretend DB Lookup
        this.name = `Recipe #${this.id}`;
    }
    toJSON() {
        return { id: this.id, name: this.name };
    }
};
