/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here
  "agentServiceName": "Apply for New Style Jobseeker’s Allowance",
  "claimStatus": "Not set",
  "claimant": "sh",
  "guidMismatch": '0',
  "task": "view",
  "postcode": "AA1 3AB",
  "serviceShortName": "New Style JSA",
  "i4Name": "JSAPS Pushes and process claims buckets",
  "i5Name": "Manual ID and bio check buckets",
  "i6Name": "OIDV, Online identity verification",
  "i7Name": "Escalation, fraud and appointee buckets",

  // scenario defaults
  "northernIreland": 0,
  "dupe": 0,
  "idRisk": 0,
  "singleFraud": 0,
  "multiFraud": 0,
  "niMatchCis": 0,
  "cis": 0,
  "appointee": 0,
  "noReg": 0,
  "build": 0,
  "nicCheck": 0,
  "bsError": 0,
  "note": 0,
  "guidMismatch": 0

}
