// "react/forbid-prop-types": ["error", { "forbid": [ "any", "array", "object" ] }]

// PropTypes of "any", "array" or "object" is meaningless,
// because it may contains any kind of data.

// In some serious project, e.g. UI components,
// we should ban above three types in PropTypes,
"react/forbid-prop-types": ["error", { "forbid": [ "any", "array", "object" ] }]

// However, in other projects containing many business logic,
// maybe "array" or "object" could be removed from banned list.
"react/forbid-prop-types": ["error", { "forbid": [ "any" ] }]
