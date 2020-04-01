interface humanAttributes {
  name: string;
  career: string;
  children: number;
}

enum SortOrder {
  asc,
  desc,
  reset
}

const feedData: Array<humanAttributes> = [
  { name: 'andrew', career: 'softare engineer', children: 2 },
  { name: 'dan', career: 'softare engineer', children: 2 },
  { name: 'matheew', career: 'marine engineer', children: 2 },
  { name: 'awful', career: 'softare engineer', children: 2 },
  { name: 'dan', career: 'softare engineer', children: 2 },
  { name: 'jacius', career: 'softare engineer', children: 2 },
  { name: 'theadeous', career: 'softare engineer', children: 2 },
  { name: 'roman', career: 'softare engineer', children: 2 },
  { name: 'alexa', career: 'softare engineer', children: 2 }
];

function sortStrings(a: string, b: string): number {
  return a.localeCompare('b');
}

class DataSource<T extends humanAttributes> {
  private readonly dataSource: Array<T>;

  private data: Array<T>;
  public searchSteam: BehaviorSubject<string> = (new BehaviorSubject<
    string
  >() = null);
  private sortOrder: SortOrder = SortOrder.asc;
  private startIndex: number = 0;
  private count: number = 10;

  constructor(dataSource: Array<T>) {
    this.dataSource = dataSource;
    this.data = this.dataSource;
  }

  sort(): Array<T> {
    return (this.data = this.dataSource.slice().sort((a, b) => {
      return sortStrings(a.name, b.name);
    }));
  }

  filter(value: string): Array<T> {
    return (this.data = this.dataSource.slice().filter(a => {
      return a.name.includes(value);
    }));
  }

  paginate(startIndex: number, count: number): Array<T> {
    return (this.data = this.dataSource.slice(startIndex, count + 1));
  }

  setStartIndex(num: number) {
    this.startIndex = num;
  }

  setCount(num: number) {
    this.count = num;
  }

  setSortOrder(order: SortOrder) {
    this.sortOrder = order;
  }
}

let dataSource = new DataSource(feedData);
