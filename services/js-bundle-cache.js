import RNFetchBlob from 'react-native-fetch-blob'
import { AsyncStorage } from 'react-native'

const client = RNFetchBlob.config({fileCache: true})

export default {
  async fetch(uri) {
    const cached = await this._tryReadFromCache(uri)
    if(cached) {
      return cached
    }
    return this._downloadAndRead(uri)
  },
  async _tryReadFromCache(uri) {
    const path = await _getBundlePath(uri)
    try {
      return _readBundle(path)
    } catch(e) {}
  },
  async _downloadAndRead(uri) {
    const res = await client.fetch('GET', uri)
    const path = res.path()
    await _saveBundlePath(uri, path)
    return _readBundle(path)
  },
  async isCached(uri) {
    return !!(await _getBundlePath(uri))
  },
  async clear(uri) {
    const path = await _getBundlePath(uri)
    try {
      await _deleteBundle(path)
    } catch(e) {}
    await _clearBundlePath(uri)
  },
}

const _getBundlePath = async uri => AsyncStorage.getItem(uri)
const _saveBundlePath = async (uri, path) => await AsyncStorage.setItem(uri, path)
const _clearBundlePath = async uri => await AsyncStorage.clear(uri)
const _readBundle = async path => await RNFetchBlob.fs.readFile(path, 'utf8')
const _deleteBundle = async path => await RNFetchBlob.fs.unlink(path)
