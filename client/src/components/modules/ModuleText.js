class ModuleText {
    constructor() {
        this.type = "Text";
        this.text = "Hello world"
    }

    display() {
        return <div className="sandbox_text">
            {this.text}
        </div>;
    }
}

export default ModuleText;