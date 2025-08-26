# rolldown-plugin-dts-issue

### Steps to Reproduce

1. `pnpm i`
2. `pnpm build:dts`

### Expected Behavior

Outputs correct code.

### Actual Behavior

Outputs wrong code:

```ts
export * from '@hypernym/frame'

//#region rolldown:runtime
//#endregion
//#region src/frame/types/driver.d.ts
interface FrameDriverControls {
  start: () => void
  stop: () => void
}
type FrameDriverUpdate = (timestamp: number) => void
type FrameDriver = (update: FrameDriverUpdate) => FrameDriverControls
declare namespace index_d_exports {
  export { FrameDriver, FrameDriverControls, FrameDriverUpdate }
}
declare namespace types_d_exports {
  export { FrameDriver, FrameDriverControls, FrameDriverUpdate }
}
__reExport(types_d_exports, index_d_exports)

//#endregion
export { FrameDriver, FrameDriverControls, FrameDriverUpdate }
```
