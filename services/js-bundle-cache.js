import RNFetchBlob from 'react-native-fetch-blob'
import { AsyncStorage } from 'react-native'

const client = RNFetchBlob.config({fileCache: true})

export default {
  async fetch(uri) {
    if(await this.isCached(uri)) {
      return _readBundle(await _getBundlePath(uri))
    }
    const res = await client.fetch('GET', uri)
    await _saveBundlePath(uri, res.path())
    return _readBundle(res.path())
  },
  async isCached(uri) {
    return !!(await _getBundlePath(uri))
  },
  async clear(uri) {
    const path = await _getBundlePath(uri)
    await _deleteBundle(path)
    await _clearBundlePath(uri)
  },
}

const _getBundlePath = async uri => AsyncStorage.getItem(uri)
const _saveBundlePath = async (uri, path) => await AsyncStorage.setItem(uri, path)
const _clearBundlePath = async uri => await AsyncStorage.clear(uri)
const _readBundle = async path => await RNFetchBlob.fs.readFile(path, 'utf8')
const _deleteBundle = async path => await RNFetchBlob.fs.unlink(path)
