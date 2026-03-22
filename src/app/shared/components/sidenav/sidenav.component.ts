import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

/** File node data with possible child nodes. */
export interface FileNode {
  name: string;
  icon: string;
  link: string;
  //link_param: string;
  children?: FileNode[];
}

/**
 * Flattened tree node that has been created from a FileNode through the flattener. Flattened
 * nodes include level index and whether they can be expanded or not.
 */
export interface FlatTreeNode {
  name: string;
  icon: string;
  link: string;
  level: number;
  expandable: boolean;
}

@Component({
    selector: 'app-sidenav',
    imports: [CommonModule, RouterLink],
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() menu!: FileNode[];
  @Input() title!: string;

  hasChildren(node: FileNode) {
    return !!node.children?.length;
  }
}
