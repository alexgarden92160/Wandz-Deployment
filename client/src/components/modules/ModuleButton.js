class ModuleButton {
    constructor() {
        this.type = "Button"
        this.text = "Button";
    }

    display() {
        return <div className="sandbox_button">
            {this.text}
        </div>;
    }
}

export default ModuleButton;