export type ValueType = 'Physical' | 'Logical';

export type DirectionParent = 'All' | 'Dual' | 'Single';
export type DirectionChild = {
  All: '[All]: None';
  Dual: '[Dual]: Horizontal' | '[Dual]: Vertical';
  Single:
    | '[Single]: Top'
    | '[Single]: Right'
    | '[Single]: Bottom'
    | '[Single]: Left';
}[DirectionParent];
export type Direction = {
  parent: DirectionParent;
  child: DirectionChild;
};
