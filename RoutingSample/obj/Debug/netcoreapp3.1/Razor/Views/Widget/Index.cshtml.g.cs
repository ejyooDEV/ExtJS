#pragma checksum "C:\Users\ejyoo\Desktop\RoutingSample\Views\Widget\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "c9d7b038dc129ff117efa8001aa3a3182c5a5489"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Widget_Index), @"mvc.1.0.view", @"/Views/Widget/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\ejyoo\Desktop\RoutingSample\Views\_ViewImports.cshtml"
using RoutingSample;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\ejyoo\Desktop\RoutingSample\Views\_ViewImports.cshtml"
using RoutingSample.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c9d7b038dc129ff117efa8001aa3a3182c5a5489", @"/Views/Widget/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f150a1a66c13cb6c57e008d2fb9b859b7fc25d8f", @"/Views/_ViewImports.cshtml")]
    public class Views_Widget_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Users\ejyoo\Desktop\RoutingSample\Views\Widget\Index.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
#nullable disable
            WriteLiteral("\n    <div class=\"text-center\">\n        SubscribeURL  ");
#nullable restore
#line 6 "C:\Users\ejyoo\Desktop\RoutingSample\Views\Widget\Index.cshtml"
                 Write(ViewData["SubscribeURL"]);

#line default
#line hidden
#nullable disable
            WriteLiteral("\n        <h1 class=\"display-4\">Welcome</h1>\n        <p>Learn about <a href=\"https://docs.microsoft.com/aspnet/core\">building Web apps with ASP.NET Core</a>.</p>\n    </div>\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591