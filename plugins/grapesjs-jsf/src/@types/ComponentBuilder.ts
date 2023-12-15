import { Editor } from "grapesjs";

  export abstract class ComponentBuilder {
    // Define a private property to store the type name
    protected _typeName: string;
    protected _label: string;
  
    // Define a public getter for the type name
    public get typeName(): string {
      return this._typeName;
    }
  
    // Define a protected constructor that sets the type name
    protected constructor(typeName: string, label: string) {
      this._typeName = typeName;
      this._label = label;
    }
  
    // Define two abstract methods that must be implemented by subclasses
    protected abstract addComponentBlock(editor: Editor): void;
    protected abstract defineComponentType(editor: Editor): void;
  
    // Define a concrete method that can be inherited or overridden
    public create(editor: Editor): void {
      this.addComponentBlock(editor);
      this.defineComponentType(editor);
    }
  }