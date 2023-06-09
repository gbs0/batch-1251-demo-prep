import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    console.dir(this.element)
    new flatpickr(this.element, {
      enableTime: true
      // more options available on the documentation!
    });
  }
}
