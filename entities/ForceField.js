function ForceField(config) {
	this.config = config
    // The top-left corner of the force field
    this.position = this.config.position
    // 2-D array containing the height and width of the force field
    this.size = this.config.size
    // list for component force functions: vertical and horizontal
    this.forceFunction = this.config.forceFunction
    this.colorFunction = this.config.colorFunction
    this.field = []

    this.initializeForceField = () => {
        this.field = []
        for (let x = this.position[0]; x < this.position[0] + this.size[0]; x ++) {
            let row = []
            for (let y = this.position[1]; y < this.position[1] + this.size[1]; y ++) {
                row.push(new Vector([this.forceFunction[0](x,y), this.forceFunction[1](x,y)]))
            }
            this.field.push(row)
        }
    }

    this.applyForce = (bodyPosition, mass) => {
        // Translate absolute position to position within the forcefield
        fieldPosition = [Math.floor(bodyPosition.components[0] - this.position[0]), Math.floor(bodyPosition.components[1] - this.position[1])]
        
        // If the Body is in the forcefield, apply the force
        if (fieldPosition[0] >= 0 && fieldPosition[0] < this.size[0] && fieldPosition[1] >= 0 && fieldPosition[1] < this.size[1]) {
            return this.field[fieldPosition[0]][fieldPosition[1]]
        }
        return new Vector([0, 0])
    }

}