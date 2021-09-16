using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RoutingSample.Models
{
    public class Project
    {
        public bool IsDeleted { get; set; } = false;

        public string Id { get; set; }

        public string ClientId { get; set; }
        public string Title { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Status { get; set; }
        public string Description { get; set; }
        public string MenuTemplate { get; set; }
    }
}