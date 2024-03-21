import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  triggerChannel = new BroadcastChannel('session');

  ngOnInit(): void {
    this.triggerChannel.addEventListener('message', (event) =>
      console.log(event.data)
    );
  }

  trigger(): void {
    this.triggerChannel.postMessage('trigger');
  }

  ngOnDestroy(): void {
    this.triggerChannel.close();
  }
}
