import {Component, OnInit, ViewChild} from '@angular/core';
import {StockPrice, StockPriceType} from "../../models/stock-price.model";
import {STOCK_PRICES} from "../../mock-data/stock-price-data";
import {DxChartComponent} from "devextreme-angular";

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.scss']
})
export class StockChartComponent implements OnInit {
  @ViewChild(DxChartComponent) chart: DxChartComponent;
  stockPrices: StockPrice[];
  stockPriceAnnotations: StockPrice[];
  stockPriceType = StockPriceType;

  constructor() { }

  ngOnInit(): void {
    this.stockPrices = STOCK_PRICES;
    this.stockPriceAnnotations = this.stockPrices.filter(n => {
      return n.annotations != null;
    });
  }

  customizeTooltip(arg) {
    return {
      text: "Open: $" + arg.openValue + "<br/>" +
        "Close: $" + arg.closeValue + "<br/>" +
        "High: $" + arg.highValue + "<br/>" +
        "Low: $" + arg.lowValue + "<br/>"
    };
  }

  log(data) {
    console.log(data);
  }

  private convertAxisLineToDash(gridGroup: SVGGElement, isArgument: boolean) {
    const argGrid = gridGroup.getElementsByClassName(isArgument ? 'dxc-arg-grid' : 'dxc-val-grid');
    if (argGrid && argGrid.length > 0) {
      const argGrids = Array.from(argGrid);
      argGrids.forEach(grid => {
        const paths = Array.from(grid.children);
        paths.forEach((path: SVGPathElement, index) => {
          path.setAttribute('stroke-dasharray', '3,3');
        });
      });
    }
  }

  onDrawn(sender: any) {
    const gridGroup = sender.element.getElementsByClassName('dxc-grids-group');
    const seriesGroup = sender.element.getElementsByClassName('dxc-series-group');
    if (gridGroup && gridGroup.length > 0) {
      this.convertAxisLineToDash(gridGroup[0], true);
      this.convertAxisLineToDash(gridGroup[0], false);
    }

    if (seriesGroup && seriesGroup.length > 0) {
      const dxcMarkers = seriesGroup[0].getElementsByClassName('dxc-markers');
      const markers = Array.from(dxcMarkers[0].children);
      markers.forEach((marker: SVGGElement) => {
        marker.setAttribute('fill', marker.getAttribute('stroke'));
      });
    }
  }

  private createContainerNode(svgNode: HTMLElement) {
    const containerNode = document.createElement('RECT');

    containerNode.setAttribute('x', '0');
    containerNode.setAttribute('y', '0');
    containerNode.classList.add('border');

    svgNode.appendChild(containerNode);
  }

  private createHeaderShadowNode(svgNode: HTMLElement, sender: any) {
    const headerNode = document.createElement('RECT');

    headerNode.setAttribute('x',"0");
    headerNode.setAttribute('y',"10");
    headerNode.setAttribute('width',"100");
    headerNode.setAttribute('height',"90");
    headerNode.setAttribute('fill',"#ffffff");

    svgNode.appendChild(headerNode);
  }

  private createHeaderNode(svgNode: HTMLElement, sender: any) {
    const headerNode = document.createElement('RECT');

    headerNode.setAttribute('x', '0');
    headerNode.setAttribute('y', '0');
    headerNode.setAttribute('rx', '10');
    headerNode.setAttribute('ry', '10');
    headerNode.setAttribute('width', '100');
    headerNode.setAttribute('height', '20');
    headerNode.setAttribute('fill', 'green');

    svgNode.appendChild(headerNode);
  }

  private createTitleNode(svgNode: HTMLElement, sender: any) {
    const titleNode = document.createElement('TEXT');
    const titleSpanNode = document.createElement('TSPAN');

    titleNode.setAttribute('x', '20');
    titleNode.setAttribute('y', '15');
    titleNode.setAttribute('fill', 'black');

    titleSpanNode.classList.add('caption');
    titleSpanNode.innerText = 'Sale Entry';

    titleNode.appendChild(titleSpanNode);

    svgNode.appendChild(titleNode);
  }

  private createContentNode(svgNode: HTMLElement, sender: any) {
    const contentNode = document.createElement('TEXT');
    const contentSpan1Node = document.createElement('TSPAN');
    const contentSpan2Node = document.createElement('TSPAN');
    const contentSpan3Node = document.createElement('TSPAN');
    const contentSpan4Node = document.createElement('TSPAN');

    contentNode.setAttribute('x', '20');
    contentNode.setAttribute('y', '20');
    contentNode.setAttribute('fill', 'black');

    contentSpan1Node.setAttribute('dx', '18');
    contentSpan1Node.setAttribute('dy', '20');
    contentSpan1Node.innerText = '07/06/2021';

    contentSpan2Node.setAttribute('dx', '18');
    contentSpan2Node.setAttribute('dy', '20');
    contentSpan2Node.innerText = '02:04:22';

    contentSpan3Node.setAttribute('dx', '18');
    contentSpan3Node.setAttribute('dy', '20');
    contentSpan3Node.innerText = '$ 12,333.00';

    contentSpan4Node.setAttribute('dx', '18');
    contentSpan4Node.setAttribute('dy', '20');
    contentSpan4Node.innerText = '1 share';

    contentNode.appendChild(contentSpan1Node);
    contentNode.appendChild(contentSpan2Node);
    contentNode.appendChild(contentSpan3Node);
    contentNode.appendChild(contentSpan4Node);

    svgNode.appendChild(contentNode);
  }

  private createGContentNode(svgNode: HTMLElement, sender: any) {
    const gContainerNode = document.createElement('G');
    const pointerPathNode = document.createElement('path');

    gContainerNode.setAttribute('transform', 'translate(0,100)');

    pointerPathNode.setAttribute('fill', 'red');
    pointerPathNode.setAttribute('d', 'M 0 0 L 100 0 C 100 2 100 4 97 4 L 53 4 L 50 8 L 47 4 L 3 4 C 0 4 0 2 0 0');

    gContainerNode.appendChild(pointerPathNode);

    svgNode.appendChild(gContainerNode);
  }

  annotationTemplates = (annoTemplate, args) => {
    // const svgNode = document.createElement('SVG');

    this.createContainerNode(annoTemplate);
    this.createHeaderShadowNode(annoTemplate, args);
    this.createHeaderNode(annoTemplate, args);
    this.createTitleNode(annoTemplate, args);
    this.createContentNode(annoTemplate, args);
    this.createGContentNode(annoTemplate, args);
  }
}
