'use strict';

import { NativeModules } from 'react-native';
const { RNNetworkInfo } = NativeModules;

const NetworkInfo = {
  async getSSID() {
    return await RNNetworkInfo.getSSID();
  },

  async getBSSID() {
    return await RNNetworkInfo.getBSSID();
  },

  async getBroadcastAdresses() {
    return await RNNetworkInfo.getBroadcastAdresses();
  },

  async getIPAddress() {
    return await RNNetworkInfo.getIPAddress();
  },

  async getIPV4Address() {
    return await RNNetworkInfo.getIPV4Address();
  }
};

module.exports = { NetworkInfo };
