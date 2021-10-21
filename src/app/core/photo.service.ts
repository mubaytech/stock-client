import {Injectable} from '@angular/core';
import {CameraDirection, CameraPhoto, CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {CameraOptions} from "@capacitor/core/dist/esm/core-plugin-definitions";

const {Camera} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photo: CameraPhoto;

  constructor() {
  }

  takePic(o: CameraOptions): Promise<CameraPhoto> {
    return Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 25,
      direction: CameraDirection.Rear,
      correctOrientation: true,
      presentationStyle: "popover",
      ...o,
    });
  }

  public async capture(o: CameraOptions = ({} as any)) {
    return await this.takePic(o);
  }

}
