# wgpu-mipmap
The WebGPU mipmap generator implemented in TypeScript. Used generate mipmaps from an Image, ByteArray or GPUTexture. 

## Usage

Only prerequisite that package expects is to have GPUDevice created. There are multiple function and classes that can be used to generate mipmaps.

For example if you have already created GPUDevice and GPUTexture `wgpuGenerateExtureMipmap` can be used to generate views and mipmaps. 
Afterwards just use your texture as usual.

```typescript
import { wgpuGenerateTextureMipmap } from './wgpu-mipmap.ts';

// ...

wgpuGenerateTextureMipmap(yourGPUDevice, yourGPUTexture);
```

For more advanced scenarios import `WGPUMipmapGenerator` itself. For example if you want to generate mipmaps but also get them as `HTMLImageElement` call `generateMipmapsAndCreateImages` on `WGPUMipmapGenerator`.

```typescript
import { WGPUMipmapGenerator } from './wgpu-mipmap.ts';

const mipmapGenerator = new WGPUMipmapGenerator(yourGPUDevice);
const result = await mipmapGenerator.generateMipmapsAndCreateImages(htmlImageElement);
const htmlImageElements = result.imageElements;
const gpuTexture = result.gpuTexture;
```


## VERSION

### 0.1.0
- Initial release.
- `wgpuGenerateTextureMipmap` function that takes `GPUDevice` and `GPUTexture` to create mipmaps.
- `WGPUMipmapGenerator` instance can be used for more advanced scenarios. Supports `generateMipmaps` and `generateMipmapsAndCreateImages`.