export namespace NetworkInfo {
  function getSSID(): Promise<string | null>;
  function getBSSID(): Promise<string | null>;
  function getBroadcastAdresses(): Promise<[string]>;
  function getIPAddress(): Promise<string | null>;
  function getIPV4Address(): Promise<string | null>;
}
