export class FieldBase<T> {
    key: string;
    field: string;
    type: string;
    required: boolean;
    length?: number;
    options?: string[];

    constructor(options: {
        key?: string,
        field?: string,
        type?: string,
        required?: boolean,
        length?: number,
      } = {}) {
      this.key = options.key || '';
      this.field = options.field || '';
      this.type = options.type || '';
      this.required = !!options.required;
      this.length = options.length;
    }
  }
