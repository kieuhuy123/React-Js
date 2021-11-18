import { createServer } from "miragejs";

export default () => {
  createServer({
    routes() {
      this.get("/api/products", () => {
        return [
          { id: 1, title: "Macbook Pro M1 Max", price: 5999 },
          { id: 2, title: "Macbook pro M1", price: 1499 },
        ];
      });
    },
  });
};
