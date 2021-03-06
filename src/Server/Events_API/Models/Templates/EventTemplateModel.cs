using System.Collections.Generic;

namespace Events_API.Models.Templates
{
    public class EventTemplateModel
    {
        public string EventType { get; set; }
        public string Name { get; set; }
        public IList<FieldConfigModel> FieldConfigs { get; set; }
    }
}