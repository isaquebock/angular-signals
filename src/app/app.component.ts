import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Count
   */
  count = signal(0);

  /**
   * Count double
   */
  countDouble = computed(() => this.count() * 2);

  /**
   * Increment count
   */
  increment(): void {
    this.count.update(count => count + 1);
  }

  /**
   * Decrement count
   */
  decrement(): void {
    this.count.update(count => count - 1);
  }

  /**
   * Set count
   */
  set(): void {
    this.count.set(10);
  }
}
